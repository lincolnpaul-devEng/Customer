"use client"

import type React from "react"

interface RoleBasedContentProps {
  role: "admin" | "manager" | "sales_rep"
  adminContent?: React.ReactNode
  managerContent?: React.ReactNode
  salesRepContent?: React.ReactNode
  children?: React.ReactNode
}

export function RoleBasedContent({
  role,
  adminContent,
  managerContent,
  salesRepContent,
  children,
}: RoleBasedContentProps) {
  switch (role) {
    case "admin":
      return adminContent || children
    case "manager":
      return managerContent || children
    case "sales_rep":
      return salesRepContent || children
    default:
      return children
  }
}
