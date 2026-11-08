class APIConfig {
  #allowedVersions = [
    "v1", "v2.0",
    "prod-v1", "prod-v2.0",
    "media-v1", "media-v2.0",
    "env-v1", "env-v2.0"
  ]
  #appVersion
  #apiVersion
  /*
  * @param config
  * @param config.appVersion
  * @param config.apiVersion
  */
  constructor({appVersion, apiVersion} = {}) {
    if (appVersion == undefined || apiVersion == undefined) {
      throw new Error("app version or api version must be here!")
    }
    if (!this.#allowedVersions.includes(apiVersion)) {
      throw new Error(`Invalid API version: '${apiVersion}'. It must be a recognized version from the allowed list.`);
    }
    this.#appVersion = appVersion
    this.#apiVersion = apiVersion
  }
  get appVersion() { return this.#appVersion }
  get apiVersion() { return this.#apiVersion }
}