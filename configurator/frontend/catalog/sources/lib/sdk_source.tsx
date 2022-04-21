import * as logos from "./logos"
import { SdkSource } from "../types"
import * as React from "react"

export const allSdkSources: SdkSource[] = [
  {
    id: "sdk-airtable",
    pic: logos.airbyte,
    package_name: "jitsu-airtable-source",
    package_version: "latest",
    displayName: "Airtable",
    stable: false,
  }, {
    id: "sdk-firebase",
    pic: logos.freshdesk,
    package_name: "jitsu-firebase-source",
    package_version: "latest",
    displayName: "Firebase",
    stable: false,
  },
]

