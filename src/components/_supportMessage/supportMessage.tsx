import { selectCurrentLocation } from '@/redux/features/currentLocation/currentLocationSlice';
import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

export const SupportMessage = () => {
    const myLocation = useSelector(selectCurrentLocation);

  useLayoutEffect(() => {
        if (myLocation.name === "") {
            toast.info("Найдите город чтобы начать использовать приложение !", {
                position: toast.POSITION.TOP_CENTER,
              });
        }
  }, [myLocation.name])

  return (
    <>
        <ToastContainer />
    </>
  )
}
