"use client"; // 👈 use it here
import data from "../../json/db.json";

import React, { useEffect, useState } from "react";

const Drag = () => {
    const [data, setdata] = useState<|[]>([]);
    useEffect(() => {
      setdata(data)
    }, []);

    return <div>Drag</div>;
};

export default Drag;
