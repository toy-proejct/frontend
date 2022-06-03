import React, { useEffect } from "react"
import Spinner from "src/components/common/Spinner"
import { useFetchKakaoToken, useGetKakaoToken } from "src/api/login/useKakaoLogin"
import { GetServerSideProps } from "next"

type KakaoRediectType = {
  code: string
}

const KakaoRedirect = ({ code }: KakaoRediectType) => {
  const accessToken = useGetKakaoToken(code).data?.data.access_token
  const mutationKakaoToken = useFetchKakaoToken(accessToken)

  useEffect(() => {
    if (accessToken) {
      mutationKakaoToken.mutate()
    }
  }, [accessToken])

  return (
    <>
      <Spinner />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { code } = context.query
  return {
    props: {
      code,
    },
  }
}

export default KakaoRedirect
