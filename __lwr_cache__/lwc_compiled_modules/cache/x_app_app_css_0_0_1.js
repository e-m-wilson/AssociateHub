function stylesheet(useActualHostSelector, token) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return (useActualHostSelector ? ":host {--mainColor: #ff6f12;--secondaryColor: #474c55;font-family: 'Ubuntu', sans-serif;margin: 0;padding: 0;text-decoration: none;display: flex;flex-direction: column;align-items: center;}" : [hostSelector, " {--mainColor: #ff6f12;--secondaryColor: #474c55;font-family: 'Ubuntu', sans-serif;margin: 0;padding: 0;text-decoration: none;display: flex;flex-direction: column;align-items: center;}"].join(''));
}
export default [stylesheet];