"use client"

import clsx from "clsx"
import styles from "@/components/profilePic.module.css"
import React from 'react';

export default function ProfilePic({ imageUrl }) {
  const style = {
    borderRadius: '50%',
    width: '100px', // Puedes ajustar el tamaño aquí
    height: '100px', // Puedes ajustar el tamaño aquí
    objectFit: 'cover',
  };

  return <img src={imageUrl} alt="Profile" style={style}
  />;
}