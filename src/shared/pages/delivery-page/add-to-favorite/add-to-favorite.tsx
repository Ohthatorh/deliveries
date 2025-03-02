"use client";

import { useAppDispatch, useAppSelector } from "@/services/redux/hooks";
import {
  addToFavorites,
  favoritesItems,
} from "@/services/redux/slices/favoritesSlice";
import { Heart } from "@/shared/components/icons";
import { FC, useEffect, useState } from "react";

interface IAddToFavorite {
  deliveryId: string;
}

export const AddToFavorite: FC<IAddToFavorite> = ({ deliveryId }) => {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(favoritesItems);
  const isInFavorites = isClient ? favorites.includes(deliveryId) : false;
  const handleAddToFavorites = () => {
    dispatch(addToFavorites(deliveryId));
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <button onClick={handleAddToFavorites}>
      <Heart fill={isInFavorites} />
    </button>
  );
};
