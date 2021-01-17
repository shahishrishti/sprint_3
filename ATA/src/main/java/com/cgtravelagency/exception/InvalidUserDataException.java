package com.cgtravelagency.exception;

public class InvalidUserDataException extends Exception{

	private String message;
	
	public InvalidUserDataException() {
		this.message = "";
	}
	public InvalidUserDataException(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "Invalid User Data " + this.message;
	}
	
	@Override
	public String getLocalizedMessage() {
		return this.message;
	}

}
