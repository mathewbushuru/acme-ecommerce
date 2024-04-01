namespace acme_pos_dotnet;

partial class Form1
{

    private System.ComponentModel.IContainer components = null;

    protected override void Dispose(bool disposing)
    {
        if (disposing && (components != null))
        {
            components.Dispose();
        }
        base.Dispose(disposing);
    }

    #region Windows Form Designer generated code

    /// <summary>
    ///  Required method for Designer support - do not modify
    ///  the contents of this method with the code editor.
    /// </summary>
    private void InitializeComponent()
    {
        textBox1 = new TextBox();
        label1 = new Label();
        textBox2 = new TextBox();
        label2 = new Label();
        label3 = new Label();
        button1 = new Button();
        SuspendLayout();
        // 
        // textBox1
        // 
        textBox1.Location = new Point(290, 163);
        textBox1.Name = "textBox1";
        textBox1.Size = new Size(212, 23);
        textBox1.TabIndex = 0;
        textBox1.TextChanged += textBox1_TextChanged;
        // 
        // label1
        // 
        label1.AutoSize = true;
        label1.Font = new Font("Segoe UI", 28F);
        label1.Location = new Point(178, 84);
        label1.Name = "label1";
        label1.Size = new Size(410, 51);
        label1.TabIndex = 1;
        label1.Text = "Welcome to Acme POS";
        label1.Click += label1_Click;
        // 
        // textBox2
        // 
        textBox2.Location = new Point(292, 215);
        textBox2.Name = "textBox2";
        textBox2.Size = new Size(210, 23);
        textBox2.TabIndex = 2;
        // 
        // label2
        // 
        label2.AutoSize = true;
        label2.Font = new Font("Segoe UI", 12F);
        label2.Location = new Point(198, 165);
        label2.Name = "label2";
        label2.Size = new Size(48, 21);
        label2.TabIndex = 3;
        label2.Text = "Email";
        label2.Click += label2_Click;
        // 
        // label3
        // 
        label3.AutoSize = true;
        label3.Font = new Font("Segoe UI", 12F);
        label3.Location = new Point(198, 217);
        label3.Name = "label3";
        label3.Size = new Size(76, 21);
        label3.TabIndex = 4;
        label3.Text = "Password";
        // 
        // button1
        // 
        button1.Font = new Font("Segoe UI", 12F);
        button1.Location = new Point(332, 261);
        button1.Name = "button1";
        button1.Size = new Size(100, 40);
        button1.TabIndex = 5;
        button1.Text = "Sign in";
        button1.UseVisualStyleBackColor = true;
        // 
        // Form1
        // 
        AutoScaleDimensions = new SizeF(7F, 15F);
        AutoScaleMode = AutoScaleMode.Font;
        BackColor = SystemColors.ControlLightLight;
        ClientSize = new Size(800, 450);
        Controls.Add(button1);
        Controls.Add(label3);
        Controls.Add(label2);
        Controls.Add(textBox2);
        Controls.Add(label1);
        Controls.Add(textBox1);
        Name = "Form1";
        Text = "AcmePOS";
        Load += Form1_Load;
        ResumeLayout(false);
        PerformLayout();
    }

    #endregion

    private TextBox textBox1;
    private Label label1;
    private TextBox textBox2;
    private Label label2;
    private Label label3;
    private Button button1;
}
