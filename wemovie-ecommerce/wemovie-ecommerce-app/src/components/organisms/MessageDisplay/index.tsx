import React from "react";
import Image from "next/image";

import ContentBackground from "@/components/atoms/ContentBackground";
import Button from "@/components/atoms/Button";

import { Content, ImageContainer, MessageText } from "./styles";

import { MessageDisplayProps } from "./types";

const MessageDisplay = ({
  message,
  image,
  buttonMessage,
  buttonAction,
}: MessageDisplayProps) => {
  return (
    <ContentBackground background="white">
      <Content>
        <MessageText>{message ?? "Default message"}</MessageText>
        <ImageContainer>
          <Image
            priority
            src={image}
            layout="fill"
            objectFit="contain"
            alt="Bag icon"
          />
        </ImageContainer>
        <div>
          <Button message={buttonMessage} buttonAction={buttonAction} />
        </div>
      </Content>
    </ContentBackground>
  );
};

export default MessageDisplay;
