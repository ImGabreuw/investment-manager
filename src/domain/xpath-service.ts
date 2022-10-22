import { SectionXPaths } from "./types/xpath-type.js";

abstract class XPathService {
  private readonly XPATHS = new Map<string, SectionXPaths>;

  constructor() {
    this.registerAll();
  }

  getAll(): SectionXPaths[] {
    return Array.from(this.XPATHS.values());
  }

  getBySectionName(sectionName: string): SectionXPaths {
    if (!this.hasXPath(sectionName)) {
      throw new Error(`não existe seção de XPath com o nome "${sectionName}"`);
    }

    return this.XPATHS.get(sectionName) as SectionXPaths;
  }

  hasXPath(sectionName: string): boolean {
    return this.XPATHS.has(sectionName);
  }

  register(sectionXPaths: SectionXPaths): void {
    const sectionName = sectionXPaths.sectionName;

    if (this.hasXPath(sectionName)) {
      throw new Error(
        `uma seção de XPath já foi registrada com o nome "${sectionName}"`
      );
    }

    this.XPATHS.set(sectionName, sectionXPaths);
  }

  abstract registerAll(): void;

}

export { XPathService };
