import time

# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Vectorious'
copyright = '2023, Mateo Gianolio'
author = 'Mateo Gianolio'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['sphinx.ext.autosummary', 'sphinx_js']

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'pydata_sphinx_theme'
html_static_path = ['_static']
html_logo = '../logo.gif'
html_theme_options = {
  'logo': {
    'alt_text': 'Vectorious',
  },
  'icon_links': [
    {
      'name': 'GitHub',
      'url': 'https://github.com/mateogianolio/vectorious',
      'icon': 'fa-brands fa-github',
      'type': 'fontawesome',
    }
  ],
  'use_edit_page_button': True,
  'show_nav_level': 3
}
html_context = {
    'github_user': 'mateogianolio',
    'github_repo': 'vectorious',
    'github_version': 'master',
    'doc_path': 'docs/',
}
html_css_files = [
  'css/custom.css?id=%s' % time.time(),
]

# -- Options for sphinx_js -----------------------------------------------------
js_language = 'javascript'
js_source_path = 'code/'
jsdoc_config_path = '../jsdoc.json'
primary_domain = 'js'
