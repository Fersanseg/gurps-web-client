export interface RestResponse {
    isError: boolean,
    errorMessage?: string,
    data: JavaResponseEntity
}

interface JavaResponseEntity {
    statusCodeValue: number,
    statusCode: string,
    headers: object,
    body: any
}

export interface LoginRestResponse extends RestResponse {
    data: LoginResponseEntity
}

export interface LoginResponseEntity extends JavaResponseEntity {
    body: LoginBodyResponse
}

interface LoginBodyResponse {
    displayName?: string,
    email: string,
    expiresIn: string,
    idToken: string,
    kind: string,
    localId: string,
    refreshToken: string,
    registered: boolean
}