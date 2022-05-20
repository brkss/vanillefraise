import React from "react";
import { Box, Center, Image } from "@chakra-ui/react";
import logo from "../assets/lg.png";
import { Form } from "./Form";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export const Subscribe: React.FC = () => {
  return (
    //<Box h={"100vh"} borderTop={"1px solid #434343"}>*/}
    <Box h={"100vh"}>
      <Center h={"100vh"}>
        <Box w={{ md: "60%", base: "100%" }} padding={"20px"}>
          <Image rounded={"20px"} m={"40px 0"} w={"100px"} src={logo} />
          <MailchimpSubscribe
            url={
              "https://gmail.us17.list-manage.com/subscribe/post?u=e83680395db24bdc252a7e981&amp;id=902529c4f6"
            }
            render={({ subscribe, status, message }) => (
              <Form
                message={message as string}
                status={status || ""}
                onValidate={(email, name, os) =>
                  subscribe({ EMAIL: email, FNAME: name, LNAME: os } as any)
                }
              />
            )}
          />
        </Box>
      </Center>
    </Box>
  );
};
