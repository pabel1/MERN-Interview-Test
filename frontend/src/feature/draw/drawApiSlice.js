import { transformDrawingData } from "../../../Utility/transformDrawingData";
import { apiSlice } from "../ApiSlice/apiSlice";

export const drawApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createDraw: builder.mutation({
      query: (data) => {
        const { title, description, elements } = data;
        // console.log("hembhai", data);
        const drawingData = transformDrawingData(title, description, elements);
        return {
          url: `/draw/create`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: drawingData,
        };
      },

      providesTags: ["draw"],
    }),
    allDraws: builder.query({
      query: () => {
        return {
          url: `/draw/all`,
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      providesTags: ["draw"],
    }),
  }),
});

export const { useAllDrawsQuery, useCreateDrawMutation } = drawApiSlice;
