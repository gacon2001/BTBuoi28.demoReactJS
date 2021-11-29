import React from "react";
import Smartphone from "./smartphone";

export default function ListSmartphone() {
    return(
        <section id="smartphone" className="container-fluid pt-5 pb-5 listsmartphone">
  <h1 className="text-white text-center">BEST SMARTPHONE</h1>
  <div className="row">
    <Smartphone/>
    <Smartphone/>
    <Smartphone/>
    <Smartphone/>
  </div>
</section>

    )
}