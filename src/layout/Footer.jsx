/*
; =======================================================
; Title: Footer.js - familysocialapp - layout folder 
; Authors: Aaron Wilson
; Instructor: Sean Bernath
; Date: 08 November 2020
; Description: Build out app's footer component.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/

import React from 'react';

import { footStyle, h6Style } from './CSS';

const Footer = () => {
  return (
    <div>
      <footer style={ footStyle } >
        <h6 style={ h6Style } > <small> &copy; Copyright 2020, Full Sail Project </small> </h6>
      </footer>
    </div>
  )
}

export default Footer;