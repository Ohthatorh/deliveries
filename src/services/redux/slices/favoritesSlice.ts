import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "../store";
import axios from "axios";
import { IDelivery } from "@/shared/types";

interface IFavoritesSlice {
  items: string[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: IFavoritesSlice = {
  items: [],
  isLoading: false,
  hasError: false,
};

type ApiError = {
  message: string;
  statusCode: number;
};

export const getFavoritesInfo = createAsyncThunk<
  IDelivery[],
  number,
  {
    state: RootState;
    rejectValue: ApiError;
  }
>("favorites/getFavoritesInfo", async (page, { rejectWithValue, getState }) => {
  try {
    const favoritesItems = getState().favorites.items;
    const { data } = await axios.get<IDelivery[]>(
      `/api/deliveries/by-uuid/?uuids=${favoritesItems.join(",")}&page=${page}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({
        message: error.response?.data.message || "Произошла ошибка",
        statusCode: error.response?.status || 500,
      });
    }
    return rejectWithValue({ message: "Неизвестная ошибка", statusCode: 500 });
  }
});

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      if (state.items.includes(action.payload)) {
        state.items = state.items.filter((item) => item !== action.payload);
        toast.success("Доставка удалена из Отслеживаемых.");
      } else {
        state.items.push(action.payload);
        toast.success("Доставка добавлена в Отслеживаемые.");
      }
    },
  },
  selectors: {
    favoritesItems: (favorites) => favorites.items,
    favoritesCount: (favorites) => favorites.items.length,
    favouritesLoading: (favorites) => favorites.isLoading,
    favouritesError: (favorites) => favorites.hasError,
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoritesInfo.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(getFavoritesInfo.fulfilled, (state) => {
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(getFavoritesInfo.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    });
  },
});

export const { addToFavorites } = favoritesSlice.actions;
export const {
  favoritesItems,
  favoritesCount,
  favouritesLoading,
  favouritesError,
} = favoritesSlice.selectors;

export default favoritesSlice.reducer;
