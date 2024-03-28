import React from "react";

import { useSelector } from "react-redux";

export const getdata = useSelector((state) => state.cartreducer.carts);
// console.log(getdata);
