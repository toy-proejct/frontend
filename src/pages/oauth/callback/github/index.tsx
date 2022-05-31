import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import Spinner from "src/components/common/Spinner"
import { client } from "src/api/client"
import { useRouter } from "next/router"
import { setAccessToken } from "src/redux/reducer/auth"

const GithubRedirect = () => {
  const getToken = () => {
    const code: string | null = new URL(window.location.href).searchParams.get("code")

    /*const sendAccessToken = async function (authObj) {
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
        if (e.response.status === 400) {
          router.push("/signup")
        }
      }
    }*/

    function requestToken(code: string | null) {
      client.post(`백엔드 주소`, { code }).then((res) => {
        console.log(res)
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

export default GithubRedirect
