To change the MySQL Workbench theme to dark on Ubuntu, follow these steps:

1. Enable the system-wide dark theme in Ubuntu by navigating to Settings > Appearance and selecting the Dark option.

2. The application interface will now appear dark, but the SQL editor area will remain light. To change the editor's theme, you need to modify the code_editor.xml file.

3. Locate the code_editor.xml file at /usr/share/mysql-workbench/data/code_editor.xml.

4. Before making changes, create a backup of the original file using the command: sudo cp code_editor.xml code_editor.xml.bak.

5. Replace the code_editor.xml file with a dark theme version from the GitHub repository created by mleandrojr: https://github.com/mleandrojr/mysql-workbench-dark-theme.

6. After replacing the file, restart MySQL Workbench to apply the changes. The entire application, including the SQL editor, should now display in a dark theme.