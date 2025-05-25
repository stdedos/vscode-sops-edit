export const sopsYamlGlob = '**/*.sops.yaml';

// NOTE: direct encryption using 'sops -e a.tmp.yaml > b.yaml' cannot be used here,
// as it is NOT a given that the file name of the TMP file will match a SOPS encryption pattern!
export const encryptCommand = 'sops encrypt --in-place [FILE]';
export const decryptToTmpCommand  = 'sops decrypt --output [TEMPFILE] [FILE]';
export const decryptInPlaceCommand  = 'sops decrypt --in-place [FILE]';
export const fileString = '[FILE]';
export const tempFileString = '[TEMPFILE]';

// unavoidable regexes
export const gitExtensionRegExp = /\.git$/;
export const getFileExtensionRegExp = /\.[^.]*$/;
