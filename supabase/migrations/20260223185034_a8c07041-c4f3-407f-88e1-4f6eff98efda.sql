
-- Create enquiries table for storing contact form submissions
CREATE TABLE public.enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert enquiries (public contact form)
CREATE POLICY "Anyone can submit an enquiry"
  ON public.enquiries
  FOR INSERT
  WITH CHECK (true);

-- No select/update/delete for anonymous users (admin only via dashboard)
