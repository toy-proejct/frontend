import { AxiosError } from "axios"
import { useRouter } from "next/router"
import { useMutation } from "react-query"
import { client } from "../client"

const fetchNaverToken = async (token: string) => {
  const naverAuthInfo = {
    email: "",
    password: "",
    providerRequest: {
      providerType: "Naver",
      token,
    },
  }
  return await client.post("/api/member/login", naverAuthInfo)
}

export const useFetchNaverToken = (token: string) => {
  const router = useRouter()
  return useMutation(["naverToken", token], () => fetchNaverToken(token), {
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        router.push("/signup")
      }
    },
    onSuccess: () => {
      router.push("/")
    },
  })
}
