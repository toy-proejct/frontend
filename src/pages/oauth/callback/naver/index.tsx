import axios from "axios"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useFetchNaverToken } from "src/api/login/useNaverLogin"
import Spinner from "src/components/common/Spinner"
import envs from "src/config/dotenv"

const NaverRedirect = () => {
  const accessTokenPath = useRouter().asPath
  const accessToken = String(accessTokenPath.split("access_token=")[1]).split("&state")[0]
  const mutationKakaoToken = useFetchNaverToken(accessToken)
  mutationKakaoToken.mutate()

  return (
    <>
      <Spinner />
    </>
  )
}

export default NaverRedirect
