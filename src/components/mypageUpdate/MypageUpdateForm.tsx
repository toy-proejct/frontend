import styled from "styled-components"
import React, { useRef, useState } from "react"
import { Formik, Field, Form } from "formik"
import { Flex } from "../shared/Flex"
import Image from "next/image"
import PhotoIcon from "../../../public/statics/users/[id]/userimg.jpg"
import TrashIcon from "../../../public/statics/users/[id]/edit/trash_icon.svg"

const MypageUpdateForm = () => {
  const FileRef = useRef<HTMLInputElement | null>(null)
  const [preview, setPreview] = useState<{
    src: string
  } | null>(null)

  const onChangePreview = (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const newPreview = { src: reader.result as string }
      setPreview(newPreview)
    }
  }

  return (
    <Formik
      initialValues={{
        nickname: "",
        gender: "",
        birthday: "",
        profileImg: "",
        introduce: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form>
          <NicknameFlex>
            <div>
              <label>별명</label>
              <p>*필수항목</p>
            </div>
            <Field name="nickname" className="nickname__input" />
          </NicknameFlex>
          <GenderFlex>
            <label>성별</label>
            <span>
              <Field name="gender" type="radio" value="남성" />
              남성
            </span>
            <span>
              <Field name="gender" type="radio" value="여성" />
              여성
            </span>
          </GenderFlex>
          <BirthdayFlex>
            <label>생년월일</label>
            <Field name="birthday" className="birthday__input" type="date" />
          </BirthdayFlex>
          <ProfileImgFlex>
            <label>프로필 이미지</label>
            <div
              onClick={() => {
                FileRef.current!.click()
              }}
            >
              <Image
                src={preview ? preview.src : PhotoIcon}
                alt="프로필이미지"
                layout="fill"
                objectFit="fill"
              />
              <button>
                <TrashIcon />
                삭제
              </button>
            </div>
            <input
              ref={FileRef}
              name="profileImg"
              type="file"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const files = (event.target as HTMLInputElement).files
                if (files !== null) {
                  setFieldValue("profileImg", files[0])
                  onChangePreview(files[0])
                }
              }}
              accept="image/*"
              hidden
            />
          </ProfileImgFlex>
          <IntroduceFlex>
            <label htmlFor="introduce">한줄소개</label>
            <Field id="introduce" name="introduce" className="introduce__input" />
          </IntroduceFlex>
        </Form>
      )}
    </Formik>
  )
}

const NicknameFlex = styled(Flex).attrs({})`
  margin-bottom: 40px;
  > div {
    font-size: 13px;
    min-width: 100px;
    width: 100px;
    > p {
      color: #757575;
    }
  }
  .nickname__input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    font-size: 12px;
    ${({ theme }) => theme.minMedia.mobile} {
      width: 40%;
    }
  }
`

const GenderFlex = styled(Flex).attrs({ alignment: "center" })`
  margin-bottom: 40px;
  > label {
    font-size: 13px;
    min-width: 100px;
    width: 100px;
  }

  > span:nth-child(2) {
    margin-right: 20px;
  }

  input {
    height: 22px;
    width: 22px;
    margin-right: 4px;
    vertical-align: bottom;
  }
`

const BirthdayFlex = styled(Flex).attrs({ alignment: "center" })`
  margin-bottom: 40px;
  > label {
    font-size: 13px;
    min-width: 100px;
    width: 100px;
    padding-bottom: 6px;
  }
  .birthday__input {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    ${({ theme }) => theme.minMedia.mobile} {
      width: 40%;
    }
  }
`

const ProfileImgFlex = styled(Flex).attrs({})`
  margin-bottom: 40px;
  > label {
    font-size: 13px;
    min-width: 100px;
    width: 100px;
    padding-bottom: 6px;
  }
  > div {
    position: relative;
    width: 200px;
    height: 200px;
    > button {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      position: absolute;
      top: 10px;
      right: 10px;
      white-space: nowrap;
      padding: 4px 10px;
      font-size: 13px;
      line-height: 20px;
      font-weight: 700;
      background-color: #35c5f0;
      border-color: #35c5f0;
      color: #fff;
      border-radius: 4px;
      svg {
        width: 16px;
        height: 16px;
        path {
          fill: white;
        }
      }
    }
  }
`

const IntroduceFlex = styled(Flex).attrs({ alignment: "center" })`
  > label {
    font-size: 13px;
    min-width: 100px;
    width: 100px;
    padding-bottom: 6px;
  }
  .introduce__input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    font-size: 12px;
    ${({ theme }) => theme.minMedia.mobile} {
      width: 40%;
    }
  }
`

export default MypageUpdateForm
