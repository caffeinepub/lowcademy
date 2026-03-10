// Stub backend for static-only Lowcademy site (no Motoko canister)
import type { ActorConfig, HttpAgentOptions } from "@icp-sdk/core/agent";

export type backendInterface = Record<string, never>;

export interface CreateActorOptions {
  agentOptions?: HttpAgentOptions;
  actorOptions?: ActorConfig;
}

export class ExternalBlob {
  private _url: string;
  onProgress?: (progress: number) => void;

  private constructor(url: string) {
    this._url = url;
  }

  static fromURL(url: string): ExternalBlob {
    return new ExternalBlob(url);
  }

  async getBytes(): Promise<Uint8Array> {
    const resp = await fetch(this._url);
    const buf = await resp.arrayBuffer();
    return new Uint8Array(buf);
  }

  toURL(): string {
    return this._url;
  }
}

export function createActor(
  _canisterId: string,
  _uploadFile: (file: ExternalBlob) => Promise<Uint8Array>,
  _downloadFile: (bytes: Uint8Array) => Promise<ExternalBlob>,
  _options?: CreateActorOptions,
): backendInterface {
  return {};
}
