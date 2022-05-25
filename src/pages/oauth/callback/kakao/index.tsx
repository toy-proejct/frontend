import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import Spinner from "src/components/common/Spinner"
import { client } from "src/api/client"
import { useRouter } from "next/router"
import { setAccessToken } from "src/redux/reducer/auth"

interface CatchError {
  response: {
    status: number
  }
}

interface ParamsI {
  [index: string]: string
  grant_type: string
  client_id: string
  redirect_uri: string
  code: string
}

const KakaoRedirect = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const getToken = () => {
    const code: string = new URL(window.location.href).searchParams.get("code")!

    const sendAccessToken = async function (authObj: { access_token: string }) {
      const access_token = {
        email: "",
        password: "",
        providerRequest: {
          providerType: "KAKAO",
          token: authObj.access_token,
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

    function requestToken(code: string) {
      const makeFormData = (params: ParamsI) => {
        const searchParams = new URLSearchParams()
        Object.keys(params).forEach((key) => {
          searchParams.append(key, params[key])
        })

        return searchParams
      }

      axios({
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        url: "https://kauth.kakao.com/oauth/token",
        data: makeFormData({
          grant_type: "authorization_code",
          client_id: "b742ac97f80474818f3a060944314e60",
          redirect_uri: "http://localhost:3000/oauth/callback/kakao",
          code,
        }),
      }).then((res) => {
        dispatch(setAccessToken(res.data.access_token))
        sendAccessToken(res.data)
      })
    }
    requestToken(code)
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

export default KakaoRedirect
