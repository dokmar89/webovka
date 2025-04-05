                <Button 
                  type="submit" 
                  className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-[#FAC833] to-[#FAD862] hover:from-[#FAD862] hover:to-[#FAE891] text-[#064052] transition-all duration-300 hover:shadow-md hover:scale-[1.02] group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Odesílání...
                    </>
                  ) : (
                    <>
                      Odeslat zprávu <SendHorizontal className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button> 