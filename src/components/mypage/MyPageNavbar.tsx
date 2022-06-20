import styled from "styled-components"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const MyPageNavbar = () => {
  const router = useRouter()
  const [navCategory, setNavCategory] = useState([
    {
      id: 0,
      href: "/users/:id",
      text: "모두보기",
      active: false,
    },
    {
      id: 1,
      href: "/users/:id/questions",
      text: "질문과답변",
      active: false,
    },
    {
      id: 2,
      href: "/users/:id/likes",
      text: "좋아요",
      active: false,
    },
    {
      id: 3,
      href: "/users/:id/follwings",
      text: "팔로잉",
      active: false,
    },
    {
      id: 4,
      href: "/users/:id/follwers",
      text: "팔로워",
      active: false,
    },
  ])

  useEffect(() => {
    const selectedCategory = navCategory.map((category, id) => {
      if (router.pathname.includes(category.href)) {
        return { ...category, active: true }
      }
      if (category.active) {
        return { ...category, active: false }
      }
      return category
    })
    setNavCategory(selectedCategory)
  }, [])

  return (
    <MyPageNavbarContainer>
      {navCategory.map((category, id) => {
        return (
          <Link key={category.text} href={category.href} passHref>
            <a>
              <span>{category.text}</span>
            </a>
          </Link>
        )
      })}
    </MyPageNavbarContainer>
  )
}

const MyPageNavbarContainer = styled.div``

export default MyPageNavbar
