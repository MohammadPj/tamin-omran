import {useMutation, useQuery} from "@tanstack/react-query";
import {createBrochureType, getBrochureTypes} from "~/services/api/services";

export const useGetBrochureTypes = () =>
  useQuery({ queryKey: ["brochure-type"], queryFn: getBrochureTypes });

export const useCreateBrochureType = () =>
  useMutation({ mutationKey: ["brochure-type"], mutationFn: createBrochureType });