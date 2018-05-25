/**
 * Build config
 */
import path from "path"

const ROOT_PATH = path.resolve(__dirname, '../../');
const SOURCE_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const TEMP_PATH = path.resolve(ROOT_PATH, 'temp');
const SCRIPTS_PATH = path.resolve(SOURCE_PATH, 'javascript');
const STYLES_PATH = path.resolve(SOURCE_PATH, 'stylesheet');
const VIEWS_PATH = path.resolve(SOURCE_PATH, 'views');
const SUB_VIEWS_PATH = path.resolve(SOURCE_PATH, 'views/sub-templates');
const SHELVE_VIEWS_PATH = path.resolve(SOURCE_PATH, 'views/shelve-templates');

class BuildConfig {
  ROOT_PATH = ROOT_PATH
  SOURCE_PATH = SOURCE_PATH
  DIST_PATH = DIST_PATH
  TEMP_PATH = TEMP_PATH
  SCRIPTS_PATH = SCRIPTS_PATH
  STYLES_PATH = STYLES_PATH
  VIEWS_PATH = VIEWS_PATH
  SUB_VIEWS_PATH = SUB_VIEWS_PATH
  SHELVE_VIEWS_PATH = SHELVE_VIEWS_PATH
}

export const buildConfig = new BuildConfig()
