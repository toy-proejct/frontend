import { useRouter } from "next/router"
import axios, { AxiosError } from "axios"
import { useQuery, useMutation } from "react-query"
import envs from "src/config/dotenv"
import { client } from "../client"

const getKakaoToken = async (code: string) => {
  return await axios.post(
    `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${envs.kakaoClientId}&redirect_uri=${envs.kakaoRedirecUri}&code=${code}`,
  )
}

const fetchKakaoToken = async (token: string) => {
  const kakaoAuthInfo = {
    email: "",
    password: "",
    providerRequest: {
      providerType: "KAKAO",
      token,
    },
  }
  return await client.post("/api/member/login", kakaoAuthInfo)
}

export const useFetchKakaoToken = (token: string) => {
  const router = useRouter()
  return useMutation(["kakaoToken", token], () => fetchKakaoToken(token), {
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

export const useGetKakaoToken = (code: string) => {
  return useQuery(["kakaoCode", code], () => getKakaoToken(code), {
    onError: () => console.log("errror1"),
  })
}
