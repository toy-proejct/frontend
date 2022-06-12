type EnvType = {
  kakaoClientId?: string
  kakaoRedirecUri?: string
  naverMapClientId?: string
  naverRedirecUri?: string
  naverAuthClientId?: string
  tinymceApiKey?: string
}

const dev = process.env.NODE_ENV !== "production"

const envs: EnvType = {
  kakaoClientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
  kakaoRedirecUri: dev
    ? process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
    : process.env.NEXT_PUBLIC_PRODUCTION_KAKAO_REDIRECT_URI,
  naverMapClientId: process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID,
  naverRedirecUri: dev
    ? process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI
    : process.env.NEXT_PUBLIC_NAVER_PRODUCTION_REDIRECT_URI,
  naverAuthClientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,

  tinymceApiKey: process.env.NEXT_PUBLIC_TINYMCE_API_KEY,
}

export default envs
