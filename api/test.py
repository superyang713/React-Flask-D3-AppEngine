email = "accounts.google.com:yang.dai@mightyhive.com"
email = email.split(":")[1]
name = email.split("@")[0]

first_name = name.split(".")[0] if "." in name else name

print(email)
print(first_name)
