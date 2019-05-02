export function removeCookie(cname: string): void {	
	let expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC;"
	document.cookie = cname + "=;" + expires + ";path=/";
}

export function setCookie(cname: string, cvalue: string, hours: number = 1): void {
	let d = new Date();
	d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname: string): string | null {
	let name = cname + "=";
	let ca = document.cookie.split(";");

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}

	return "";
}

export function checkCookie(): string | null {
	let user = getCookie("token");
	if (user !== "") {
		return user;
	} else {
		return null;
	}
}
