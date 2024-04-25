import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'/
import axiosBaseQuery from './axiosInstance';
import axiosInstance from './axiosInstance';
import axios from 'axios';
// import { request } from './axiosInstance';
// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'adminApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/'}),
  baseQuery: axiosBaseQuery({//fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
  }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => ({
        url: `/getAllStudents`,
        // headers:{
        //   Authorization: `Bearer ${localStorage.getItem('token')}`
        // }
      }),
      providesTags:['adminApi'],
      invalidatesTags:['adminApi']
    }),
    getTeachers: builder.query({
      query: () => ({
        url: `/getAllTeachers`,
        // headers:{
        //   Authorization: `Bearer ${localStorage.getItem('token')}`
        // }
      }),
      providesTags:['adminApi'],
      invalidatesTags:['adminApi']
    }),
    adminLogin: builder.mutation({
      query: (payload) => ({
        url: '/login/admin',
        method: 'POST',
        body: payload,
        data: payload
      })
    }),
    updateStudent: builder.mutation({
      query: (payload) => ({
        url: `/updateStudent/${payload._id}`,
        method: 'PUT',
        body: payload,
        // headers:{
        //   Authorization: `Bearer ${localStorage.getItem('token')}`
        // }
      }),
      // providesTags:['teacherApi'],
      invalidatesTags:['adminApi']
    }),
    updateTeacher: builder.mutation({
      query: (payload) => ({
        url: `/updateTeacher/${payload._id}`,
        method: 'PUT',
        body: payload,
        // headers:{
        //   Authorization: `Bearer ${localStorage.getItem('token')}`
        // }
      }),
      // providesTags:['teacherApi'],
      invalidatesTags:['adminApi']
    }),
    addStudent: builder.mutation({
      query: (payload) => ({
        url: `/createStudent`,
        method: 'POST',
        body: payload,
        // headers:{
        //   Authorization: `Bearer ${localStorage.getItem('token')}`
        // }
      }),
      // providesTags:['teacherApi'],
      invalidatesTags:['adminApi']
    }),
    addTeacher: builder.mutation({
      query: (payload) => ({
        url: `/createTeacher`,
        method: 'POST',
        body: payload,
        // headers:{
        //   Authorization: `Bearer ${localStorage.getItem('token')}`
        // }
      }),
      // providesTags:['teacherApi'],
      invalidatesTags:['adminApi']
    }),
    updateAdmin: builder.mutation({
      query: (payload) => ({
        url: `/updateAdmin/${payload._id}`,
        method: 'PUT',
        body: payload,
        // headers:{
        //   Authorization: `Bearer ${localStorage.getItem('token')}`
        // }
      }),
      // providesTags:['teacherApi'],
      invalidatesTags:['adminApi']
    }),
    deleteStudent: builder.mutation({
      query: (payload) => ({
        url: `/deleteStudent/${payload._id}`,
        method: 'DELETE',
        // headers:{
        //   Authorization: `Bearer ${localStorage.getItem('token')}`
        // }
      }),
      // providesTags:['teacherApi'],
      invalidatesTags:['adminApi']
    }),
    deleteTeacher: builder.mutation({
      query: (payload) => ({
        url: `/deleteTeacher/${payload._id}`,
        method: 'DELETE',
        // headers:{
        //   Authorization: `Bearer ${localStorage.getItem('token')}`
        // }
      }),
      // providesTags:['teacherApi'],
      invalidatesTags:['adminApi']
    }),
  }),
  // api: axiosInstance
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetStudentsQuery, 
  useAdminLoginMutation, 
  useUpdateStudentMutation,
  useAddStudentMutation,
  useUpdateAdminMutation,
  useDeleteStudentMutation,
  useGetTeachersQuery,
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
  useAddTeacherMutation
} = adminApi