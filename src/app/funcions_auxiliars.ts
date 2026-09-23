export function saludar(nom: string): string {
  return `Hola, ${nom}!`;
}

export function esMajorEdat(edat: number): boolean {
  return edat >= 18;
}

export function sumarArray(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}