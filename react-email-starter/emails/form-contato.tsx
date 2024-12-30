import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text
} from "@react-email/components";
import * as React from "react";

interface VercelInviteUserEmailProps {
  name?: string;
  email?: string;
  message?: string;
}

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

export const FormContato = ({
  name = "",
  email = "",
  message = "",
}: VercelInviteUserEmailProps) => {

  return (
    <Html>
      <Head />
      <Preview>{name} quer tirar dúvidas.</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            {/* <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/static/vercel-logo.png`}
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section> */}
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <p>Olá <strong>{name}</strong> em que podemos ajudar?</p>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              E-mail do cliente: {email}
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              Mensagem do cliente: {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// VercelInviteUserEmail.PreviewProps = {
//   username: "alanturing",
//   userImage: `${baseUrl}/static/vercel-user.png`,
//   invitedByUsername: "Alan",
//   invitedByEmail: "alan.turing@example.com",
//   teamName: "Enigma",
//   teamImage: `${baseUrl}/static/vercel-team.png`,
//   inviteLink: "https://vercel.com/teams/invite/foo",
//   inviteFromIp: "204.13.186.218",
//   inviteFromLocation: "São Paulo, Brazil",
// } as VercelInviteUserEmailProps;

export default FormContato;
