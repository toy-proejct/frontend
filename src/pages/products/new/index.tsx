import React, { useState } from "react"
import styled from "styled-components"
import ProductUploadImage from "src/components/products/new/ProductUploadImage"

export type UploadImageType = {
  id: number
  name: string
  src: string
}

export default function NewProduct() {
  const [uploadImageList, setUploadImageList] = useState<UploadImageType[]>([])
  const addUploadImageList = (image: UploadImageType) => {
    setUploadImageList((prev) => [...prev, image])
  }
  const onClickUploadImageDeleteBtn = (id: number) => {
    const filterUploadImageList = uploadImageList.filter((image) => image.id !== id)
    setUploadImageList(filterUploadImageList)
  }
  const onSubmitNewProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert("submit!!!")
  }

  return (
    <StyledNewProductContainer>
      <form onSubmit={onSubmitNewProduct}>
        <h3>필수정보</h3>
        <ProductUploadImage
          addUploadImageList={addUploadImageList}
          uploadImageList={uploadImageList}
          onClickUploadImageDeleteBtn={onClickUploadImageDeleteBtn}
        />
        <StyledArticleCotnainer>
          <StyledFlexedLeftItemContainer>
            <p>제목</p>
          </StyledFlexedLeftItemContainer>
          <StyledProductTitleInputWrapper>
            <input
              type="text"
              placeholder="제목을 입력하세요. 최대 30글자입니다."
              minLength={2}
              maxLength={30}
              required
            />
          </StyledProductTitleInputWrapper>
        </StyledArticleCotnainer>
        <StyledArticleCotnainer>
          <StyledFlexedLeftItemContainer>
            <p>가격</p>
          </StyledFlexedLeftItemContainer>
          <StyledProductNumberInputWrapper>
            <input type="number" placeholder="숫자만 입력해주세요." min={1} required />
            <span>원(배송비포함)</span>
          </StyledProductNumberInputWrapper>
        </StyledArticleCotnainer>
        <StyledArticleCotnainer>
          <StyledFlexedLeftItemContainer>
            <p>수량</p>
          </StyledFlexedLeftItemContainer>
          <StyledProductNumberInputWrapper>
            <input
              type="number"
              defaultValue={1}
              placeholder="수량을 입력해주세요."
              required
              min={1}
            />
            <span>개</span>
          </StyledProductNumberInputWrapper>
        </StyledArticleCotnainer>
        <StyledArticleCotnainer>
          <StyledFlexedLeftItemContainer>
            <p>상태</p>
          </StyledFlexedLeftItemContainer>
          <StyledProductStatusWrapper>
            <label>
              <input type="radio" value="중고상품" name="status" defaultChecked />
              <span>중고상품</span>
            </label>
            <label>
              <input type="radio" value="새상품" name="status" />
              <span>새상품</span>
            </label>
          </StyledProductStatusWrapper>
        </StyledArticleCotnainer>
        <StyledArticleCotnainer>
          <StyledFlexedLeftItemContainer>
            <p>상세설명</p>
          </StyledFlexedLeftItemContainer>
          <StyledProductDetailWrapper>
            <textarea
              placeholder="상품 설명을 입력해주세요. (10글자 이상)"
              required
              minLength={10}
            />
          </StyledProductDetailWrapper>
        </StyledArticleCotnainer>
        <StyledSubmitButtonWrapper>
          <button type="submit">등록하기</button>
        </StyledSubmitButtonWrapper>
      </form>
    </StyledNewProductContainer>
  )
}
const StyledSubmitButtonWrapper = styled.div`
  position: sticky;
  background: inherit;
  padding-top: 1rem;
  padding-bottom: 2rem;
  bottom: 0px;
  display: flex;
  flex-direction: row-reverse;
  button {
    background: rgb(53, 202, 244);
    color: white;
    padding: 1rem;
    border-radius: 4px;
    padding: 0.9rem 2rem;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
  }
`

const StyledFlexedLeftItemContainer = styled.div`
  flex: 0 0 15%;
  margin-top: 0.3rem;
`
const StyledFlexedRightItemContainer = styled.div`
  flex-grow: 1;
`
const StyledProductStatusWrapper = styled(StyledFlexedRightItemContainer)`
  display: flex;
  align-items: center;

  input:checked {
    border: 4px solid rgb(53, 202, 244);
  }
  input {
    appearance: none;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    border: 2px solid #999;
    margin-right: 0.2rem;
  }

  label {
    font-size: 0.9rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
  }
`

const StyledProductDetailWrapper = styled(StyledFlexedRightItemContainer)`
  textarea {
    resize: none;
    width: 100%;
    height: 150px;
    outline: none;
    padding: 0.3rem;
    border: 1px solid rgb(130, 140, 148);
    border-radius: 4px;
  }
`

const StyledProductNumberInputWrapper = styled(StyledFlexedRightItemContainer)`
  display: flex;
  align-items: center;
  input {
    padding: 0.4rem 0.3rem;
    border-radius: 4px;
    border: 1px solid rgb(130, 140, 148);
    outline: none;
  }
  span {
    padding-left: 0.3rem;
  }
`

const StyledArticleCotnainer = styled.article`
  display: flex;
  border-top: 1px solid rgb(220, 219, 228);
  padding: 1rem 0;
`

const StyledProductTitleInputWrapper = styled(StyledFlexedRightItemContainer)`
  display: flex;
  align-items: center;
  p {
    padding-left: 0.8rem;
    font-size: 0.8rem;
  }
  input {
    flex-grow: 1;
    outline: none;
    padding: 0.4rem 0.3rem;
    border-radius: 4px;
    border: 1px solid rgb(130, 140, 148);
  }
`

const StyledNewProductContainer = styled.section`
  max-width: ${({ theme }) => theme.size.xLarge};
  margin: 0 auto;
  position: relative;
  h3 {
    padding: 1rem 0;
    border-bottom: 2px solid rgb(30, 29, 41);
  }
`
