export interface SignUp {
  email: string;
  password: string;
  name?: string;
}

export interface LoginSuccess {
  token: string;
}
export interface LoginError {
  error: string;
}

export interface SignUpSuccess {
  id: number;
  token: string;
}

export interface GetUsersSuccess {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: [
    {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    },
  ];
}
