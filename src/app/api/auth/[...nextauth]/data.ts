import { UserRole } from "@/enums/UserRole";

export const user = {
  id: "1",
  name: "David Melo",
  email: "david@test.com",
  passsword: "12345",
  image:
    "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  roles: [UserRole.USER, UserRole.ADMIN],
};
