type EnvType = {
  kakaoClientId?: string
  kakaoRedirecUri?: string
  naverMapClientId?: string
  naverClientId?: string
  naverSecretKey?: string
  naverRedirecUri?: string
  naverState?: string
  githubClientId?: string
  githubRedirecUri?: string
  tinymceApiKey?: string
}

const dev = process.env.NODE_ENV !== "production"

const envs: EnvType = {
  kakaoClientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
  kakaoRedirecUri: dev
    ? process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
    : process.env.NEXT_PUBLIC_PRODUCTION_KAKAO_REDIRECT_URI,
  naverMapClientId: process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID,
  naverClientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
  naverSecretKey: process.env.NEXT_PUBLIC_NAVER_SECRET_KEY,
  naverRedirecUri: dev
    ? process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI
    : process.env.NEXT_PUBLIC_NAVER_PRODUCTION_REDIRECT_URI,
  naverState: process.env.NEXT_PUBLIC_NAVER_State,
  githubClientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
  githubRedirecUri: dev
    ? process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI
    : process.env.NEXT_PUBLIC_GITHUB_PRODUCTION_REDIRECT_URI,
  tinymceApiKey: process.env.NEXT_PUBLIC_TINYMCE_API_KEY,
}

export default envs
