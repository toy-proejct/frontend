import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { client } from "src/api/client"
import Spinner from "src/components/common/Spinner"
import { setAccessToken } from "src/redux/reducer/auth"

interface CatchError {
  response: {
    status: number
  }
}

const LoginCallbackPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const sendAccessToken = async function (token: string) {
    const access_token = {
      email: "",
      password: "",
      providerRequest: {
        providerType: "NAVER",
        token,
      },
    }
    try {
      const result = await client.post("/api/member/login", access_token)
      console.log(result)
    } catch (e) {
      const err = e as CatchError
      if (err.response.status === 400) {
        router.push("/signup")
      }
    }
  }

  const getToken = () => {
    const hash = router.asPath.split("#")[1]
    if (hash) {
      const accessToken = hash.split("=")[1].split("&")[0]
      dispatch(setAccessToken(accessToken))
      sendAccessToken(accessToken)
    }
  }

  useEffect(() => {
    getToken()
  }, [])
  return (
    <>
      <Spinner />
    </>
  )
}

export default LoginCallbackPage
