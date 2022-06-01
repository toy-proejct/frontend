import { useEffect, useRef, useState } from "react"
import { Editor } from "@tinymce/tinymce-react"
import styled from "styled-components"
import { Editor as TinyMCEEditor } from "tinymce"

export default function Write() {
  const editorRef = useRef<TinyMCEEditor | null>(null)
  const [text, setText] = useState("")
  const [isShowModal, setIsShowModal] = useState(false)

  const onChangeText = (a: string, editor: TinyMCEEditor) => {
    setText(a)
    console.log(text)
  }
  return (
    <WriteContainer>
      <div className="guide">
        <div className="title">
          <svg
            className="icon"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect width="25" height="25" fill="#6ADFC4" rx="10"></rect>
            <g fill="#FFF" transform="translate(7 8)">
              <rect width="7" height="1.5" rx=".8"></rect>
              <rect width="11" height="1.5" y="4" rx=".8"></rect>
              <rect width="11" height="1.5" y="8" rx=".8"></rect>
            </g>
          </svg>
          <h1>질문과 답변 글 작성 가이드</h1>
        </div>
        <p>참고가 되는 사진을 같이 공유해주시면 더 좋은 답변을 얻을 수 있습니다.</p>
        <p>
          비슷한 어려움을 겪는 유저를 위해 답변자에게 포인트를 지급하며, 답변이 달린 질문글은 삭제할
          수 없습니다.
        </p>
        <p>인테리어와 관련 없는 질문은 숨김 및 삭제될 수 있습니다.</p>
        <p>
          상품/배송 등 쇼핑 관련 문의는{" "}
          <a href="/" target="_blank">
            고객센터
          </a>
          에서 요청해주세요 .
        </p>
      </div>

      <form>
        <input type="text" placeholder="제목을 입력해주세요." />
        <Editor
          apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>질문을 자유롭게 적어주세요!</p>"
          value={text}
          onEditorChange={(a, editor) => onChangeText(a, editor)}
          init={{
            width: "100%",
            height: 400,
            menubar: false,
            statusbar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar: "undo redo | bold italic underline | custom_button",
            setup: (editor) => {
              editor.ui.registry.addButton("custom_button", {
                icon: "image",
                onAction: () => setIsShowModal((prev) => !prev),
              })
            },
            content_style:
              "body {font-family: Noto Sans KR, sans-serif;  font-size:14px; margin: 0;} p {margin: 5px 0; padding: 0 3px; color: black; font-size: 16px;font-weight: 400;line-height: 28px; min-height: 28px;}",
          }}
        />
      </form>
    </WriteContainer>
  )
}

const WriteContainer = styled.div`
  padding: 30px 0;
  ${({ theme }) => theme.minMedia.mobile} {
    max-width: 720px;
    margin: 30px auto 0;
    padding: 0;
  }
  .guide {
    padding: 0 15px 30px 15px;
    border-bottom: 10px solid #ededed;
    ${({ theme }) => theme.minMedia.mobile} {
      padding: 30px;
      border: 1px solid #ededed;
      border-radius: 8px;
      box-shadow: 0 2px 4px 0 rgb(234 235 239 / 100%);
      border-bottom: 1px solid #dadce0;
      margin-bottom: 45px;
    }
    .title {
      display: flex;
      margin-bottom: 15px;
      padding: 0 5px;
      ${({ theme }) => theme.minMedia.mobile} {
        margin-bottom: 30px;
      }
      h1 {
        display: inline-block;
        margin-left: 12px;
        font-size: 15px;
        font-weight: 700;
        line-height: 26px;
        color: #3f474d;
      }
    }
    p {
      position: relative;
      margin: 12px 0 12px 35px;
      font-size: 15px;
      line-height: 25px;
      color: #424242;

      > a {
        color: #35c5f0;
        font-weight: 700;
      }

      &::before {
        content: "•";
        position: absolute;
        display: inline-block;
        top: -1px;
        right: 100%;
        margin-right: 15px;
        font-size: 22px;
      }
    }
  }
  form {
    > input {
      display: block;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
      padding: 15px 50px 15px 25px;
      border: none;
      color: #292929;
      font: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      outline: none;
      margin-bottom: 5px;

      &::placeholder {
        color: #cfd0d4;
      }

      ${({ theme }) => theme.minMedia.mobile} {
        display: block;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        border: none;
        color: #292929;
        font: inherit;
        font-weight: 700;
        padding: 15px 60px 15px 0;
        font-size: 34px;
        line-height: 31px;
      }
    }
    .tox-tinymce {
      border: none;
      border-radius: 0;
      border-bottom: 0px !important;
    }

    .tox-sidebar-wrap {
      padding: 30px 0 !important;

      ${({ theme }) => theme.maxMedia.mobile} {
        margin: 0 16px;
      }
    }
  }
`
