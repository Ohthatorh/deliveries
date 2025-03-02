import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { IDelivery } from "@/shared/types";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const status = searchParams.get("status");
  const perPageStr = searchParams.get("per_page") || "10";
  const pageStr = searchParams.get("page") || "1";

  try {
    const filePath = path.join(process.cwd(), "public", "deliveries.json");
    const data = await readFile(filePath, "utf8");
    const deliveriesData: { entities: IDelivery[] } = JSON.parse(data);
    const allDeliveries = deliveriesData.entities;

    if (id) {
      const delivery = allDeliveries.find(
        (item: IDelivery) => item.entity.uuid === id
      );
      if (!delivery) {
        return NextResponse.json({
          success: false,
          error_message: "Delivery not found",
        });
      }
      return NextResponse.json({
        success: true,
        delivery,
      });
    } else {
      let filteredDeliveries = allDeliveries;
      if (status) {
        filteredDeliveries = allDeliveries.filter(
          (item: IDelivery) =>
            item.entity.statuses[item.entity.statuses.length - 1].code ===
            status
        );
      }

      const count = filteredDeliveries.length;
      const perPage = parseInt(perPageStr, 10);
      const page = parseInt(pageStr, 10);
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;
      const paginatedDeliveries = filteredDeliveries.slice(
        startIndex,
        endIndex
      );

      return NextResponse.json({
        success: true,
        deliveries: {
          items: paginatedDeliveries,
          per_page: perPage,
          count: count,
        },
      });
    }
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify("Internal Error"), { status: 500 });
  }
}
