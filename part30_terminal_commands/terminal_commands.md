# ls - list files

# mkdir "FileName" - creates new directory FileName

# mkdir -p -> allows to create multiple directories with subdirectories 
ex: mkdir -p ./project/data ./project/sourcecode ./assets/images

# touch index.html - creates index.html file inside current directory

# rm - removes files

# rmdir - removes empty folders 

# rm -rf -> force removes folders

# cltr + fn + ` -> open terminal in vs code

# ctrl + win + o -> open virtual keyboard(lifesaver)

# pwd - print working directory/ show current directory

# clear - clear screen

#  cd "dirName" - change directory to dirName

# cd .. - back button

# / - means inside selected directory
Ex: cd Desktop/files means go to files inside Desktop
Ex: cd ../.. go back twice

# Absolute path - the entire path to the file. Always starts with a /
Ex: cd /Users/Raj/Desktop/Delta

# Relative path - relative to the current selected directory
Ex: cd /Delta

# cd / -> moves to root directory 

# cd ~ -> moves to home  directory

# man ls (mac) / ls --help (windows) -> display manual on selected command

## FLAGS
# ls -a -> includes directories whose names start with a "."

# ls -l -> display additional information

# ls -la -> combination of above -l and -a flags

# ls -r -> show in reverse

# ls -t -> shows in last modified order

# ls -rt -> last modified is showed last

# ls -s -> shows name and size of files 

# ls -S -> sorts files accorinding to size 

# ls -rS -> sorts files accorinding to size in decending order

# ls -R or ls -RF -> shows all subdirectories too

# nano "filename" -> opens a text editor where we can write something in the file by default and then use ctrl + 0 to write out name of file and ctrl + x to quit

# mv "filename" "location" -> moves files and directories 
ex: mv ../part2/index.html ../part3/ will move it inside part3/
note: mv ../part2/index.html ../part3/main.html will rename index.html with main.html but removes data in main.html resulting in data loss, so be very carefull. same happens when moving directories

# mv -i -> same as mv but it asks confirmation to avoid mistakes

# cp "filename" "location" -> copies file to location and works similar to mv command

# cp -r "dirname" "location" -> copies entire directory and it's contents to location

# WILDCARDS
'*' is a wildcard, which represents zero or more other characters. Let’s consider the shell-lesson-data/exercise-data/alkanes directory: *.pdb represents ethane.pdb, propane.pdb, and every file that ends with ‘.pdb’. On the other hand, p*.pdb only represents pentane.pdb and propane.pdb, because the ‘p’ at the front can only represent filenames that begin with the letter ‘p’.

? is also a wildcard, but it represents exactly one character. So ?ethane.pdb could represent methane.pdb whereas *ethane.pdb represents both ethane.pdb and methane.pdb.

Wildcards can be used in combination with each other. For example, ???ane.pdb indicates three characters followed by ane.pdb, giving cubane.pdb ethane.pdb octane.pdb.

When the shell sees a wildcard, it expands the wildcard to create a list of matching filenames before running the preceding command. As an exception, if a wildcard expression does not match any file, Bash will pass the expression as an argument to the command as it is. For example, typing ls *.pdf in the alkanes directory (which contains only files with names ending with .pdb) results in an error message that there is no file called *.pdf. However, generally commands like wc and ls see the lists of file names matching these expressions, but not the wildcards themselves. It is the shell, not the other programs, that expands the wildcards

