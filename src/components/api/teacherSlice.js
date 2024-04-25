import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'/
import axiosInstance from './axiosInstance';
import axios from 'axios';
// import { request } from './axiosInstance';
// Define a service using a base URL and expected endpoints
export const teacherApi = createApi({
  reducerPath: 'teacherApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/'}),
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/',
  }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => ({
        url: `/getAllStudents`,
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }),
      providesTags:['teacherApi'],
      invalidatesTags:['teacherApi']
    }),
    teacherLogin: builder.mutation({
      query: (payload) => ({
        url: '/login/teacher',
        method: 'POST',
        body: payload
      })
    }),
    updateStudent: builder.mutation({
      query: (payload) => ({
        url: `/updateStudent/${payload._id}`,
        method: 'PUT',
        body: payload,
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }),
      // providesTags:['teacherApi'],
      invalidatesTags:['teacherApi']
    }),
    addStudent: builder.mutation({
      query: (payload) => ({
        url: `/createStudent`,
        method: 'POST',
        body: payload,
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }),
      // providesTags:['teacherApi'],
      invalidatesTags:['teacherApi']
    }),
    updateTeacher: builder.mutation({
      query: (payload) => ({
        url: `/updateTeacher/${payload._id}`,
        method: 'PUT',
        body: payload,
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }),
      // providesTags:['teacherApi'],
      invalidatesTags:['teacherApi']
    }),
    deleteStudent: builder.mutation({
      query: (payload) => ({
        url: `/deleteStudent/${payload._id}`,
        method: 'DELETE',
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }),
      // providesTags:['teacherApi'],
      invalidatesTags:['teacherApi']
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetStudentsQuery, 
  useTeacherLoginMutation, 
  useUpdateStudentMutation,
  useAddStudentMutation,
  useUpdateTeacherMutation,
  useDeleteStudentMutation
} = teacherApi