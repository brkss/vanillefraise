import React from "react";
import {
  Center,
  Box,
  Heading,
  Input,
  Text,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { RouteComponentProps } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  useVerifyResetTokenMutation,
  useResetPasswordMutation,
} from "../../generated/graphql";
import { getAccessToken, setAccessToken } from "../../utils/token/token";
import { Error } from "../../components";

export const ResetPassword: React.FC<RouteComponentProps<any>> = ({
  match,
}) => {
  const [loading, SetLoading] = React.useState(true);
  const [token, SetToken] = React.useState("");
  const history = useHistory();
  const [verifyResetToken] = useVerifyResetTokenMutation();
  const [form, SetForm] = React.useState<any>({});
  const [error, SetError] = React.useState("");
  const [resetPassword] = useResetPasswordMutation();

  // verify token
  React.useEffect(() => {
    const _token = match.params.token;
    verifyResetToken({
      variables: {
        token: _token,
      },
    }).then((res) => {
      console.log("res >>> ", res);
      if (!res || !res.data || !res.data.verifyResetToken) {
        history.push("/login");
        return;
      }
      SetToken(_token);
      SetLoading(false);
    });
  }, []);

  const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
    SetForm({
      ...form,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleResetPassword = () => {
    console.log("form >>> ", form);
    if (!form || !form.newPassword || !form.repeatedPassword) {
      SetError("Missing Fields");
      return;
    }
    if (form.newPassword !== form.repeatedPassword) {
      SetError("Password not matching");
      return;
    }
    SetError("");
    resetPassword({
      variables: {
        newPassword: form.newPassword,
        token: token,
      },
    }).then((res) => {
      console.log("reseted password => ", res);
      if (!res || !res.data) {
        SetError("Something went wrong !");
        return;
      } else if (!res.data.resetPassword.status) {
        SetError(res.data.resetPassword.message!);
        return;
      }
      if (res.data.resetPassword.status && res.data.resetPassword.token) {
        setAccessToken(res.data.resetPassword.token);
        history.push("/dash");
      }
    });
  };

  if (loading) {
    return (
      <Center h={"100vh"}>
        <Spinner />
      </Center>
    );
  }

  //console.log("token ->>>>> ", match.params.token);

  return (
    <Center h={"100vh"}>
      <Box w={{ base: "100%", md: "500px" }}>
        <Heading>Reset Password</Heading>
        {error ? <Error text={error} /> : null}
        <Box mt={"12px"}>
          <Text fontWeight={"bold"}>New Password :</Text>
          <Input
            onChange={(e) => handleForm(e)}
            id={"newPassword"}
            variant={"filled"}
            type={"password"}
            placeholder={"New Password"}
          />
        </Box>
        <Box mt={"12px"}>
          <Text fontWeight={"bold"}>Repeat Password :</Text>
          <Input
            onChange={(e) => handleForm(e)}
            id={"repeatedPassword"}
            variant={"filled"}
            type={"password"}
            placeholder={"Repeat Password"}
          />
        </Box>
        <Button onClick={() => handleResetPassword()} mt={"12px"}>
          Change password
        </Button>
      </Box>
    </Center>
  );
};
