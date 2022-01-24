import { NextRequest, NextResponse } from "next/server";

export async function middleware(request, event){
    return NextResponse.redirect('/');
}