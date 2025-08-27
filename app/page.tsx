const res = await fetch("https://sts.amazonaws.com/?Action=GetCallerIdentity&Version=2011-06-15", {
  method: "POST",
  headers: { "X-Amz-Security-Token": sessionToken },
});
const data = await res.text();
console.log(data);
