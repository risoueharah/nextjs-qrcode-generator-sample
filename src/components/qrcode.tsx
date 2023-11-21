"use client";

import { QRCodeCanvas } from "qrcode.react";
import { FC } from "react";

interface QRCodeProps {
  url: string;
}

const QRCode: FC<QRCodeProps> = (props) => {
  return (
    <QRCodeCanvas
      value={props.url}
      size={256}
      bgColor={"#FFFFFF"}
      fgColor={"#000000"}
      level={"L"}
      includeMargin={true}
      imageSettings={{
        // src: "/favicon.ico",
        src: "",
        x: undefined,
        y: undefined,
        height: 24,
        width: 24,
        excavate: true,
      }}
    />
  );
};

export default QRCode;
