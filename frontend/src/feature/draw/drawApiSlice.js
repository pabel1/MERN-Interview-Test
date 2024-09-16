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

      invalidatesTags: ["draw"],
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
    singleDraw: builder.query({
      query: ({ id }) => {
        return {
          url: `/draw/single-draw/${id}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      providesTags: ["draw"],
    }),
    deleteDraw: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/draw/draw/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["draw"],
    }),

    updateDraw: builder.mutation({
      query: ({ id, data }) => {
        const { title, description, elements } = data || {};

        console.log(id);
        console.log(data);

        const drawingData = transformDrawingData(title, description, elements);
        console.log(drawingData);
        return {
          url: `/draw/draw-update/${id}`,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: drawingData,
        };
      },
      invalidatesTags: ["draw"],
    }),
  }),
});

export const {
  useAllDrawsQuery,
  useCreateDrawMutation,
  useSingleDrawQuery,
  useDeleteDrawMutation,
  useUpdateDrawMutation,
} = drawApiSlice;
